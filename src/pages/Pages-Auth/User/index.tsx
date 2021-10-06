import { useState } from 'react';
import { Form } from '@unform/web';
import { faUser, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export function User() {
  const { user } = useAuthContext();
  const [userProfile, setUserProfile] = useState(user);
  const [phonesNumbers, setPhonesNumbers] = useState([user?.phonesnumber]);

  function addPhoneNumber() {
    if (phonesNumbers.length > 4) return;
    setPhonesNumbers([...phonesNumbers, null]);
  }
  function removeButtonElement(index: number) {
    const newPhonesNumbers = [...phonesNumbers];
    newPhonesNumbers.splice(index, 1);
    setPhonesNumbers(newPhonesNumbers);
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
            </div>
            {/* eslint-disable-next-line no-console */}
            <Form onSubmit={(e) => console.log(e)}>
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
