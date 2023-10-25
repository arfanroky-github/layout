type Sender = {
  id: string;
  name: string;
  img: string;
};

type Message = {
  sender: Sender;
  date: Date;
  id: string;
  text: string;
};

const randomId = Math.random().toString();

const messages: Message[] = [
  {
    id: randomId,
    sender: {
      id: "3",
      name: "Sylverter",
      img: "https://i.imgur.com/Y7z2Qxb.jpg",
    },
    date: new Date(),
    text: "Hello",
  },
  {
    id: randomId,
    sender: {
      id: "2",
      name: "Sylverter",
      img: "https://i.imgur.com/Y7z2Qxb.jpg",
    },
    date: new Date(),
    text: "Hi",
  },
  {
    id: randomId,
    sender: {
      id: "1",
      name: "Stallone",
      img: "https://i.imgur.com/Y7z2Qxb.jpg",
    },
    date: new Date(),
    text: "How are you?",
  },
];

const ChatBox = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default ChatBox;

function Header() {
  return <header className="bg-gray-200 py-10">Chat Header</header>;
}

function Body() {
  // every text will start at the bottom of the chat body

  function currentUser(id: string) {
    console.log(id)
    return id === "1";
  }

  return (
    <div className="flex-1 overflow-auto flex flex-col justify-end items-end">
        
      {messages.map((msg) => (
        <div
        key={msg.id}
          className={`w-full flex ${
            currentUser(msg.sender.id) ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`flex  mb-2`}>
            <div
              className="rounded py-2 px-3"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              <p className="text-sm text-teal">{msg.sender.name}</p>
              <p className="text-sm mt-1">{msg.text}</p>
              <p className="text-right text-xs text-grey-dark mt-1">
                {new Date(msg.date).toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
      {messages.map((msg) => (
        <div
        key={msg.id}
          className={`w-full flex ${
            currentUser(msg.sender.id) ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`flex  mb-2`}>
            <div
              className="rounded py-2 px-3"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              <p className="text-sm text-teal">{msg.sender.name}</p>
              <p className="text-sm mt-1">{msg.text}</p>
              <p className="text-right text-xs text-grey-dark mt-1">
                {new Date(msg.date).toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
      {messages.map((msg) => (
        <div
        key={msg.id}
          className={`w-full flex ${
            currentUser(msg.sender.id) ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`flex  mb-2`}>
            <div
              className="rounded py-2 px-3"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              <p className="text-sm text-teal">{msg.sender.name}</p>
              <p className="text-sm mt-1">{msg.text}</p>
              <p className="text-right text-xs text-grey-dark mt-1">
                {new Date(msg.date).toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <footer className="bg-gray-200 py-10">Chat Footer</footer>;
}
