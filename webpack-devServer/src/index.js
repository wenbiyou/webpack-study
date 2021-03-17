const ul = document.getElementById("ul");

fetch("/api/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.login;
      ul.append(li);
    });
  });
