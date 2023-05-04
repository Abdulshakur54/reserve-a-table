export default function SelectInputWithoutFormik({
  label,
  handleChange,
  children,
  menus,
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <select
          className="border border-slate-700 rounded-md px-3 py-2 w-full"
          onChange={(event) => {
            handleChange((prevState) => {
             
              const selectedMenu = menus.find((menu) => {
                return menu.id == event.target.value;
              });
              const previousState = [...prevState];              if (
                !previousState.find((menu) => {
                  return (menu.id == event.target.value);
                })
              ) {
                const {id,name} = selectedMenu
                return [...prevState, {id,name}];
              }
              return [...prevState];
            });
          }}
        >
          {children}
        </select>
      </div>
    </div>
  );
}
