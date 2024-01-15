const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-2xl p-4 m-2">Contact Us</h1>
      <form>
        <input
          placeholder="name"
          className="border-black border p-2 m-2"
        />
        <input
          placeholder="e-mail"
          className="border border-black p-2 m-2"
        />
        <button className="bg-gray-200 rounded-lg border p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
