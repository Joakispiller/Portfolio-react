


import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import './Formulario.css';

const Formulario = () => {
  const [state, handleSubmit] = useForm("xleyeqly"); 
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};

    if (!values.Nombre) {
      formErrors.Nombre = <p className='mnm'>Completa este campo</p>
    }

    if (!values.Email) {
      formErrors.Email = <p className='mnm'>Completa este campo</p>
    }

    if (!values.Asunto) {
      formErrors.Asunto = <p className='mnm'>Completa este campo</p>
    }

    if (!values.Comentarios) {
      formErrors.Comentarios = <p className='mnm'>Completa este campo</p>
    }

    return formErrors;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      handleSubmit(event); 
      setValues({}); 
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="forma">
      {state.succeeded ? (
        <p className="respuesta">Gracias por comunicarte, voy a estar contestando pronto.</p>
      ) : (
        <Box mr={{ base: '2em', md: '4em', xl: '15em' }} mt={{ base: '2em', md: '4em', xl: '2.3em' }}>
          <Box className="flexNM">
            <Box
              w={{ base: '20em', md: '40em', xl: '41em' }}
              ml={{ base: '2em', md: '4em', xl: '0em' }}
              mb={{ base: '2em', md: '2em', xl: '0em' }}
            >
              <input
                type="name"
                className="Forms"
                placeholder="Nombre"
                minLength="1"
                name="Nombre"
                onChange={handleChange}
                value={values.Nombre || ''}
              />
              {errors.Nombre && <span className="error">{errors.Nombre}</span>}
            </Box>

            <Box ml={{ base: '2em', md: '4em', xl: '1.1em' }} w={{ base: '20em', md: '40em', xl: '40.6em' }}>
              <input
                type="email"
                className="Forms"
                placeholder="Email"
                name="Email"
                onChange={handleChange}
                value={values.Email || ''}
              />
              {errors.Email && <span className="error">{errors.Email}</span>}
            </Box>
          </Box>

          <Box mt={{ base: '2em', md: '2em', xl: '1.3em' }} ml={{ base: '2em', md: '4em', xl: '0em' }}>
            <input
              type="text"
              name="Asunto"
              className="Forms"
              placeholder="Asunto"
              onChange={handleChange}
              value={values.Asunto || ''}
            />
            {errors.Asunto && <span className="error">{errors.Asunto}</span>}
          </Box>

          <Box mt={{ base: '2em', md: '2em', xl: '1.3em' }} ml={{ base: '2em', md: '4em', xl: '0em' }}>
            <textarea
              className="msj"
              name="Comentarios"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              onChange={handleChange}
              value={values.Comentarios || ''}
            />
            {errors.Comentarios && <span className="error">{errors.Comentarios}</span>}
          </Box>

          <Box>
            <Button
              colorScheme="teal"
              variant="outline"
              id="btn"
              type="submit"
              color="#00C296"
              fontWeight={350}
              w={{ base: '11em', md: '14em', xl: '11em' }}
              h={{ base: '2.5em', md: '3.5em', xl: '3em' }}
              mt={{ base: '2em', md: '2.5em', xl: '2.1em' }}
              mb={{ base: '6em', md: '6em', xl: '0em' }}
              fontSize={{ base: '0.9em', md: '1.1em', xl: '1em' }}
              _hover={{
                bg: '#00C296',
                color: 'Black',
              }}
            >
              Enviar mensaje
            </Button>
          </Box>
        </Box>
      )}
    </form>
  );
};

export { Formulario };





















