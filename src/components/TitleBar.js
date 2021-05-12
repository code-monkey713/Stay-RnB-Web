const bootstrap = require("bootstrap");

console.log(bootstrap);

export const TitleBar = () => {
  return (
    <div className="row">
      <div className="col-6 m-auto">
        <h1 className="title text-center">Stay RnB</h1>
      </div>
    </div>
  );
};
