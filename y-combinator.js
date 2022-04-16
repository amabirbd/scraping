// selecting an element with id starting with number
document.querySelector("#\\33 1048646 > td:nth-child(3) > a");
document.querySelector('[id="31048646"]');
document.getElementById("31048646");

//getting the properties
console.dir(document.querySelector('[id="31048646"]'));

//with classname
document.querySelector(".titlelink");

const itemArray = [...document.querySelectorAll(".titlelink")];

function getData() {
  const data = [];

  for (let element of [...document.querySelectorAll(".athing")]) {
    const title = element.querySelector(".storylink").innerText;

    const commentElement =
      element.nextElementSibling.querySelector(".subtext a+a");
    const comment = commentElement ? commentElement.innerText : "";

    data.push({ title, comment });

    element.nextElementSibling.remove();
    element.remove();
  }

  console.table(data);
}

getData();
