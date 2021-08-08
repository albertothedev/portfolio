import axios, { AxiosResponse, AxiosError } from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Contact = (): JSX.Element => {
  const [value, setValue] = useState<string | null>("Send");

  function submit(e: any): void {
    e.preventDefault();

    setValue(null);

    const name: string = e.target.name.value;
    const email: string = e.target.email.value;
    const subject: string = e.target.subject.value;
    const message: string = e.target.message.value;

    const data = {
      name,
      email,
      subject,
      message,
    };

    axios
      .post(`${process.env.REACT_APP_PORTFOLIO_API_URL}/contact`, { data })
      .then((res: AxiosResponse) => setValue("Email sent!"))
      .catch((error: AxiosError) => console.error(error));
  }

  return (
    <form onSubmit={submit} className="contact">
      <h1 className="contact__title">Get in touch</h1>

      <div className="contact__links">
        <a href={process.env.REACT_APP_LINKEDIN_URL} className="contact__links__link" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={process.env.REACT_APP_GITHUB_URL} className="contact__links__link" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a href={`mailto:${process.env.REACT_APP_EMAIL_ACCOUNT}`} className="contact__links__link" target="_blank">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>

      <span className="contact__separator">OR</span>

      <div className="contact__info">
        <div className="contact__info__name">
          <label htmlFor="name" className="contact__info__name__label">
            Name
          </label>
          <input type="text" id="name" name="name" className="contact__info__name__input" required />
        </div>

        <div className="contact__info__subject">
          <label htmlFor="subject" className="contact__info__subject__label">
            Subject
          </label>
          <input type="text" id="subject" name="subject" className="contact__info__subject__input" required />
        </div>

        <div className="contact__info__email">
          <label htmlFor="email" className="contact__info__email__label">
            Email
          </label>
          <input type="email" id="email" name="email" className="contact__info__email__input" required />
        </div>
      </div>

      <div className="contact__message">
        <label htmlFor="message" className="contact__message__label">
          Message
        </label>
        <textarea id="message" name="message" rows={10} cols={50} className="contact__message__input" required></textarea>
      </div>

      {value ? (
        <button className="contact__submit">{value}</button>
      ) : (
        <div className="contact__loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Contact;
