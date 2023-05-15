import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 1000); })

const Form = ({ onSuccess, onError }) => {
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);
  const [sending, setSending] = useState(false);
 
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      if (!firstName || !lastName || !email || !message) {
        alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
        setSending(false);
        return;
      }
      try {
        await mockContactApi();
        setSending(false);
        onSuccess(); // call onSuccess function after successful request
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    
    [firstName, lastName, email, message, onSuccess, onError]
  );
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value.trim() !== "");
  }
  
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          
        <Field placeholder="" label="Nom" onChange={handleFirstNameChange} />
          <Field placeholder="" label="Prénom" />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          <Field placeholder="" label="Email" />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
