import axios from 'axios';
import { Jumbotron, Spinner, Alert } from 'react-bootstrap';
import React,{ useState, useEffect } from 'react';
import Card from './Card.jsx';
import MyModal from './MyModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';
const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};
const spinnerSizeStyle = {
  width: '13rem',
  height: '13rem',
};

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     activePictureData: null,
  //     requestState: '',
  //     showModal: false,
  //     showErrorBlock: false,
  //     form: {
  //       name: '',
  //       comment: '',
  //     },
  //   };
  // }

  const [items, setItems] = useState([]);
  const [activePictureData, setActivePictureData] = useState(null);
  const [requestState, setRequestState] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showErrorBlock, setShowErrorBlock] = useState(false);
  const [form, setForm] = useState({ name: '', comment: '' });


  const getDataRequest = async (id) => {
    const uri = baseUrl + (id ? `/${id}` : '');
    setRequestState('processing');
    try {
      const res = await axios.get(uri);
      if (id) {
        setRequestState('success');
        setActivePictureData(res.data);
        setShowModal(true);
      } else {
        setRequestState('success');
        setItems(res.data);
      }
    } catch (error) {
      setRequestState('failed');
      setShowErrorBlock(true);
      throw error;
    }
    // });
  };

  useEffect(() => {
    getDataRequest();
  }, []);

  const handleClick = (id) => () => getDataRequest(id);
  const renderPictures = () => items.map((el) => <Card key={el.id} src={el.url} onClickAction={handleClick(el.id)}/>);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, comment } = form;
    const { id } = activePictureData;

    try {
      this.setState({ requestState: 'processing' });
      await axios.post(`${baseUrl}/${id}/comments`, { name, comment });
      setRequestState('success');
      setForm({ name: '', comment: '' });
      setShowModal(false);
      // this.setState({ requestState: 'success', form: { name: '', comment: '' }, showModal: false });
    } catch (error) {
      setRequestState('failed');
      setShowErrorBlock(true);
      // this.setState({ requestState: 'failed', showErrorBlock: true });
      throw error;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ name: '', comment: '' });
    // this.setState({ showModal: false, form: { name: '', comment: '' } });
  };

  // const handleShowModal = () => {
  //   setShowModal(true);
  //   // setForm({ name: '', comment: '' });
  //   // this.setState({ showModal: true });
  // };

  const renderModal = () => (
    activePictureData && <MyModal
      show={showModal}
      data={activePictureData}
      onFormChange={handleChange}
      onFormSubmit={handleSubmit}
      formData={form}
      onHide={handleCloseModal}
    />
  );

  if (requestState === 'processing') {
    return (<div className="text-center" style={centerStyle}><Spinner animation="border" style={spinnerSizeStyle} /></div>);
  }

  return (
    <>
      <Jumbotron className="text-center">
        <h1>TEST APP</h1>
      </Jumbotron>
      {requestState === 'success' ? (
        <div className="container">
          <div className="row justify-content-center">
            {renderPictures()}
          </div>
          {renderModal()}
        </div>
      ) : (
      <Alert variant='info' className="text-center">
        Something wrong with newtwork please try later
      </Alert>
      )}
    </>
  );
};

export default App;
