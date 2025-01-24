import clsx from 'clsx';
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { RiUser3Fill } from 'react-icons/ri';

const Contact = ({ name, number }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={clsx(css.infoItem, css.contactNameItem)}>
          <RiUser3Fill className={css.contactNameIcon} />
          <span className={css.contactName}>{name}</span>
        </div>
        <div className={clsx(css.infoItem, css.contactNumberItem)}>
          <FaPhone className={css.contactPhoneIcon} />
          <span className={css.contactNumber}>{number}</span>
        </div>
      </div>
      <div className={css.contactBtnItem}>
        <button className={css.btn}>Delete</button>
      </div>
    </div>
  );
};
export default Contact;
