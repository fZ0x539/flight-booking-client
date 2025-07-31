export default function WelcomeMenu() {
  return (
    <section>
      <div className="text-center mt-12 space-y-5">
        <h1 className="text-5xl font-semibold">Welcome to LexiFlight</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus ex dolores adipisci in vero cupiditate accusamus
          aliquid excepturi ipsa aliquam quas quibusdam!
        </p>
      </div>
      <MenuGrid />
    </section>
  );
}

const MenuGrid = () => {
  const menuItems = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center h-32 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
        >
          <span className="text-lg font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
};
