const checkboxes = document.querySelectorAll("input");
let lastChecked;
let shiftDown = false;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function (event) {
    if (event.shiftKey && this.checked) {
      let indexCurrentBox;
      let indexLastBox;

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] === lastChecked) {
          indexLastBox = i;
        }

        if (checkboxes[i] === this) {
          indexCurrentBox = i;
        }
      }

      if (indexCurrentBox < indexLastBox) {
        [indexCurrentBox, indexLastBox] = [indexLastBox, indexCurrentBox];
      }

      for (let i = indexLastBox; i <= indexCurrentBox; i++) {
        checkboxes[i].checked = true;
      }
    }

    lastChecked = checkbox;
  });
});
