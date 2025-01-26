import React from "react";
import Sign from "./componen/Sign";
import Login from "./componen/Login";
import Home from "./componen/Home";
import Fashion from "./componen/Fashion";
import Gadget from "./componen/Gadget";
function page() {
 return (
<>
<section className="pt-36 pb-32">
  <Sign/>
</section>

<section className="pt-36 -b-32">
  <Login/>
</section>

<section className="pt-36 -b-32">
  <Home/>
</section>

<section className="pt-36 -b-32">
  <Fashion/>
</section>

<section className="pt-36 -b-32">
  < Gadget/>
</section>

</>

)
}




export default page