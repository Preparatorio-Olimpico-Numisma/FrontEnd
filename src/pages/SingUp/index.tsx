import { useState } from "react";

import { BackArrow } from "../../components/BackArrow";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { ScreenSuccess } from "../../components/screen-success/sucess";

import "./styles.scss";

export function SingUp() {

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal);

  function FormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toggle()
  }

  return (
    <>
      { modal ? (
        <ScreenSuccess
          ButtonMessage="Fazer login"
          description="Agora você faz parte da plataforma do Numisma. Tenha uma ótima experiência."
          redirect="/singin"
          title="Cadastro concluído"
        />
      ) : (
      <section id="SingUp">
      <main>
        <BackArrow/>
        
        <div>
          <h1>Cadastro</h1>
          <h4>Preencha os dados abaixo para começar.</h4>
        </div>
        <form onSubmit={(e) =>FormSubmit(e)}>
          <Input 
            label="UF" 
            type="text" 
            required 
            autoComplete="address-level1" 
          />

          <Input 
            label="Cidade" 
            type="text" 
            required 
            autoComplete="address-level2" 
          />

          <Input 
            label="Nome" 
            type="text" 
            required 
            autoComplete="given-name" 
          />

          <Input
            label="Sobrenome"
            type="text"
            required
            autoComplete="family-name"
          />

          <Input 
            label="E-mail" 
            type="email" 
            required 
            autoComplete="email" 
          />
          
          <Input
            label="Senha"
            type="password"
            required
            autoComplete="new-password"
          />
          <Button type="submit">Concluir cadastro</Button>
        </form>
      </main>
      <Aside />
    </section>
    )
      }
    </>
  );
}
