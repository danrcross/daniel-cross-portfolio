import React from "react";
import { useState } from "react";
import { Flex, Box } from "@radix-ui/themes";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErr, setFieldErr] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [emailValid, setEmailValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.alert(
      `Hi, ${name}! \n\nI will respond to your message at ${email} as soon as I can.\n\nYour message:\n\n"${message}"`
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    handleBlur(e);
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (e.target.value.trim() === "") {
      setFieldErr({
        ...fieldErr,
        [name]: true,
      });
    } else {
      setFieldErr({
        ...fieldErr,
        [name]: false,
      });
    }
    if (name === "email") {
      const boolean = validateEmail(value);
      setEmailValid(boolean);
    }
  };
  const validateEmail = (email) => {
    const regex = /[\w%.%-]+@[a-z0-9.-]+\.[a-zA-Z]{2,8}/;
    return email.match(regex);
  };
  return (
    <Flex direction="row" justify="between" mx="9">
      <Box align="left">
        <div className="contact-div">
          <h2>Contact</h2>
          <Flex
            className="formFlex"
            direction="column"
            justify="between"
            mx="-2"
          >
            <Box>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="formPiece">
                  <label className="formLabel" htmlFor="name">
                    <Flex direction="row" justify="between">
                      <Box>Name</Box>

                      {fieldErr.name && (
                        <Box>
                          <span className="alertMess">
                            {" "}
                            Name field required!
                          </span>
                        </Box>
                      )}
                    </Flex>
                  </label>

                  <input
                    className="formInput"
                    value={formData.name}
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    required
                  ></input>
                </div>
                <div className="formPiece">
                  <label htmlFor="email" className="formLabel">
                    <Flex direction="row" justify="between">
                      <Box>Email</Box>

                      {fieldErr.email && (
                        <Box>
                          <span className="alertMess">
                            {" "}
                            Email field required!
                          </span>
                        </Box>
                      )}
                      {!emailValid && !fieldErr.email && (
                        <Box>
                          <span className="alertMess">
                            Email address invalid!
                          </span>
                        </Box>
                      )}
                    </Flex>
                  </label>
                  <div className="inp-err">
                    <input
                      className="formInput"
                      value={formData.email}
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="johndoe@email.com"
                      required
                    ></input>
                  </div>
                </div>

                <label className="formLabel" htmlFor="message">
                  <Flex direction="row" justify="between">
                    <Box>Message</Box>
                    {fieldErr.message && (
                      <Box>
                        <span className="alertMess">
                          {" "}
                          Message field required!
                        </span>
                      </Box>
                    )}
                  </Flex>
                </label>
                <textarea
                  className="formInput"
                  value={formData.message}
                  id="message"
                  name="message"
                  rows="10"
                  cols="30"
                  wrap="hard"
                  maxLength="200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter message here..."
                  required
                ></textarea>
                <input className="Button" type="submit" value="Submit"></input>
              </form>
            </Box>
          </Flex>
        </div>
      </Box>
    </Flex>
  );
}
