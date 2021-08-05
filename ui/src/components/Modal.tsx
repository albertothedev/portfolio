import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  image: string;
  links: {
    demo: string | undefined;
    source: string | undefined;
  };
  longDesc: string;
  onClick: () => void;
};

export const Modal = ({ image, longDesc, links, onClick }: ModalProps): JSX.Element => (
  <div className="modal" onClick={onClick}>
    <div className="modal__content" onClick={(e: any) => e.stopPropagation()}>
      <div className="modal__content__howItWorks">
        <h2 className="modal__content__howItWorks__title">How it works</h2>

        <div className="modal__content__howItWorks__preview">
          <img src={image} alt="Picture" className="modal__content__howItWorks__preview__image" />

          <div className="modal__content__howItWorks__preview__links">
            <a className="modal__content__howItWorks__preview__links__link" href={links.demo} target="_blank">
              Go to demo
            </a>
            <a className="modal__content__howItWorks__preview__links__link" href={links.source} target="_blank">
              View source
            </a>
          </div>
        </div>

        <p className="modal__content__howItWorks__description">{longDesc}</p>
      </div>

      <button className="modal__content__close" onClick={onClick}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  </div>
);

export default Modal;
