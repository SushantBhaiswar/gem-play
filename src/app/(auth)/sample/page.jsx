const Sample = () => {
  return (
    <div className="">
      <div className="flex justify-center flex-col items-center text-black bg-white p-8">
        <h2 className="text-black">Welcome</h2>
        <p> Please login to Admin Dashboard</p>
        <input name="userName" type="text" placeholder="Username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <button className="w-full bg-orange-500 text-white">Log In</button>
      </div>
    </div>
  );
};

export default Sample;
