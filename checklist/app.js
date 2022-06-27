const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// variable to store last checked
let lastChecked;

// function to check all between last and current checked
document.onselectstart = new Function('return false');
function handleCheck(e) {
  let inBetween = false;
  let state = e.target.checked;
  if (e.shiftKey) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween && lastChecked) {
        checkbox.checked = state;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
