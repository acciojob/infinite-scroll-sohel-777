//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  let itemCount = 10;

  // Add default list items
  for (let i = 1; i <= itemCount; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item " + i;
    list.appendChild(listItem);
  }

  // Function to check if user has reached the end of the list
  function isEndOfList() {
    const listRect = list.getBoundingClientRect();
    return listRect.bottom <= window.innerHeight;
  }

  // Function to add more list items
  function addMoreItems() {
    const startIndex = itemCount + 1;
    const endIndex = itemCount + 2;

    for (let i = startIndex; i <= endIndex; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List Item " + i;
      list.appendChild(listItem);
    }

    itemCount += 2;
  }

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    if (isEndOfList()) {
      addMoreItems();
    }
  });
});

