function handleSubmit(e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let Name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;

    console.log(fullName, Name, lastName, Email, Password);

    let a = document.getElementById("ans1");
    a.textContent = fullName;

    let b = document.getElementById("ans2");
    b.textContent = Name;

    let c = document.getElementById("ans3");
    c.textContent = lastName;

    let d = document.getElementById("ans4");
    d.textContent = Email;

    let f = document.getElementById("ans5");
    f.textContent = Password;
    
}


