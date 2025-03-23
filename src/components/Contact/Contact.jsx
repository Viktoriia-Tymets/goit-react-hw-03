export default function Contact({ contact, onDelete }) {
  return (
    <li>
      <p>
        <strong>{contact.name}</strong>: {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
