import { useState } from 'react';
import { Form } from '@unform/web';
import { faUser, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';

import { useAuthContext } from '../../../hooks/useAuth';

import { Sidebar } from '../../../components/Sidebar';
import {
  Input,
  TextArea,
  MaskInput,
} from '../../../components/UserComponnents/Input';

// import ImageProfile from '../../../assets/images/User.svg';
import BackgroundImage from '../../../assets/images/Backgound.svg';
import Alert from '../../../assets/images/Alert.svg';

import './styles.scss';

interface userData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber0?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  phoneNumber3?: string;
  phoneNumber4?: string;
  description?: string;
}

export function User() {
  const { user, AlterUser } = useAuthContext();
  const [userProfile, setUserProfile] = useState(user);
  const [phonesNumbers, setPhonesNumbers] = useState([user?.phonesnumber]);
  const [errorMessage, setErrorMessage] = useState('');

  function addPhoneNumber() {
    if (phonesNumbers.length > 4) return;
    const newPhonesNumbers = [...phonesNumbers, null];
    setPhonesNumbers(newPhonesNumbers);
  }
  function removeButtonElement(index: number) {
    const newPhonesNumbers = [...phonesNumbers];
    newPhonesNumbers.splice(index, 1);
    setPhonesNumbers(newPhonesNumbers);
  }
  const validationPhones = {
    phoneNumber0(value: string) {
      return validationPhones.errorAll(value, 1);
    },
    phoneNumber1(value: string) {
      return validationPhones.errorAll(value, 2);
    },
    phoneNumber2(value: string) {
      return validationPhones.errorAll(value, 3);
    },
    phoneNumber3(value: string) {
      return validationPhones.errorAll(value, 4);
    },
    phoneNumber4(value: string) {
      return validationPhones.errorAll(value, 5);
    },
    errorAll(value: string, phone: number) {
      const phoneNumber = value.match(/[0-9]/g)?.join('');
      const message = `O número ${phone} não é válido`;
      const isNaN = Number.isNaN(Number(phoneNumber?.length));
      if (isNaN) return message;
      return Number(phoneNumber?.length) < 10 ? message : false;
    },
  };
  async function AlterDataUser(data: userData) {
    try {
      setErrorMessage('');
      const schema = Yup.object().shape({
        firstName: Yup.string()
          .required('Nome obrigatório')
          .min(3, 'O nome tem que ter no mínimo 3 caracteres'),
        lastName: Yup.string()
          .required('Sobrenome obrigatório')
          .min(3, 'O Sobrenome tem que ter no mínimo 3 caracteres'),
        email: Yup.string().email('Email inválido').required('Obrigatório'),
      });
      await schema.validate(data);
      Object.entries(data).forEach(([key, value]) => {
        if (
          key === 'phoneNumber0' ||
          key === 'phoneNumber1' ||
          key === 'phoneNumber2' ||
          key === 'phoneNumber3' ||
          key === 'phoneNumber4'
        ) {
          const phone = key;
          const isValid = validationPhones[phone](value);
          if (isValid) throw new Error(isValid);
        }
      }, []);
      await AlterUser({
        id: user?.id,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        role: user?.role,
        date_joined: user?.date_joined,
        description: data?.description,
        avatar: user?.avatar,
        address: user?.address,
        state: user?.state,
        city: user?.city,
        phonesnumber: phonesNumbers,
      });
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  }

  return (
    <Sidebar>
      <main className="UserMain">
        <section className="ContainerImageUser">
          <div className="imageBackground">
            <img src={BackgroundImage} alt="bg" />
          </div>
          <div className="UserImage">
            {userProfile?.avatar ? (
              <img src={userProfile.avatar} alt="Avatar" />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </div>
          <h1>
            {userProfile?.first_name} {userProfile?.last_name}
          </h1>
          <h3>{userProfile?.role ? userProfile.role : 'Aluno'}</h3>
        </section>

        <div className="UserContainer">
          <section className="UserItem">
            <div className="TitleUser">
              <h1>Seus Dados</h1>
              <div className="line" />
              <div className="error">{errorMessage}</div>
            </div>
            <Form onSubmit={(data) => AlterDataUser(data)}>
              <div className="NameContainer">
                <Input
                  label="Nome"
                  name="firstName"
                  value={userProfile?.first_name}
                  onChange={(e) => {
                    if (userProfile) {
                      setUserProfile({
                        ...userProfile,
                        first_name: e.target.value,
                      });
                    }
                  }}
                />
                <Input
                  label="Sobrenome"
                  name="lastName"
                  value={userProfile?.last_name}
                  onChange={(e) => {
                    if (userProfile) {
                      setUserProfile({
                        ...userProfile,
                        last_name: e.target.value,
                      });
                    }
                  }}
                  required
                />
              </div>
              <div className="ContainerEmailAndNumberPhone">
                <Input
                  label="Email"
                  name="email"
                  value={userProfile?.email}
                  onChange={(e) => {
                    if (userProfile) {
                      setUserProfile({
                        ...userProfile,
                        email: e.target.value,
                      });
                    }
                  }}
                  required
                  type="email"
                />
              </div>
              <div className="PhoneNumber">
                <label>Números de telefones</label>
                <button type="button" onClick={addPhoneNumber}>
                  <FontAwesomeIcon icon={faPlus} />
                  Novo número
                </button>
                <div className="line" />
                <div className="PhoneNumberItem">
                  {phonesNumbers?.map((phone, index) => {
                    return (
                      <div className="PhoneNumberItemContainer" key={index}>
                        <MaskInput
                          label={`Número ${index + 1}`}
                          name={`phoneNumber${index}`}
                          value={phone || ''}
                          InputMaskChange={(e) => {
                            const newPhonesNumbers = [...phonesNumbers];
                            newPhonesNumbers[index] = e;
                            setPhonesNumbers(newPhonesNumbers);
                          }}
                          mask="PHONE"
                          maxLength={15}
                          required
                        />
                        <button onClick={() => removeButtonElement(index)}>
                          <FontAwesomeIcon icon={faTrashAlt} color="#e83f5b" />
                          <span>Remover</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="description">
                <TextArea
                  label="Biografia"
                  name="description"
                  maxLength={200}
                  value={userProfile?.description}
                  onChange={(e) => {
                    if (userProfile) {
                      setUserProfile({
                        ...userProfile,
                        description: e.target.value,
                      });
                    }
                  }}
                />
              </div>
              <div className="line" />
              <footer className="AlertAndSaveForm">
                <div className="alert">
                  <img src={Alert} alt="Alert" />
                  <div>
                    <strong>Importnate!</strong>
                    <p>Preencha todos os dados corretamentes</p>
                  </div>
                </div>
                <div className="submit">
                  <button type="submit">Salvar dados</button>
                </div>
              </footer>
            </Form>
          </section>
        </div>
      </main>
    </Sidebar>
  );
}
