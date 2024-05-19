const formGenereated = document.querySelector("#form");
const inputPasswordLength = document.querySelector(".password__length-input");

const generatedpasswordContainer = document.querySelector(
  ".generated__password"
);

formGenereated.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  function onToBoolean(isOn) {
    return isOn === "on" ? true : false;
  }

  const passwordLength = +formData.get("password_length");
  const checkboxUppercase = onToBoolean(formData.get("checkbox_uppercase"));
  const checkboxLowercase = onToBoolean(formData.get("checkbox_lowercase"));
  const checkboxNumber = onToBoolean(formData.get("checkbox_number"));
  const checkboxSymbol = onToBoolean(formData.get("checkbox_symbol"));

  if (passwordLength <= 0) return;

  const password = generatePassword(
    passwordLength,
    checkboxUppercase,
    true,
    checkboxNumber,
    checkboxSymbol
  );
  generatedpasswordContainer.classList.remove("hidden");
  generatedpasswordContainer.textContent = password;
});

const generatePassword = function (
  length,
  isUpper = false,
  isLower = true,
  isNumber = false,
  isSymbol = false
) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*_-/.?";

  let password = "";

  for (let i = 0; i < length; i++) {
    if (isUpper) {
      password += alphabet[random(alphabet.length)].toUpperCase();
    }

    if (isLower) {
      password += alphabet[random(alphabet.length)];
    }

    if (isNumber) {
      password += number[random(number.length)];
    }

    if (isSymbol) {
      password += symbol[random(symbol.length)];
    }
  }
  password = password.slice(0, length);
  return password;
};

const random = function (number = 0) {
  return Math.floor(Math.random() * number);
};
