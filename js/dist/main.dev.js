"use strict";

//menu drop down section
var navlist = document.querySelector('.navlist');
var openNavBtn = document.querySelector('#open_nav-btn');
var closeNavBtn = document.querySelector('#close_nav-btn'); //open nav dropdown

var openNav = function openNav() {
  navlist.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}; //close nav dropdown


var closeNav = function closeNav() {
  navlist.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
};

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
var sidebar = document.querySelector('aside');
var showSideBarBtn = document.querySelector('#show_sidebar_btn');
var hideSideBarBtn = document.querySelector('#hide_sidebar_btn');

var showSideBar = function showSideBar() {
  sidebar.style.left = '0';
  showSideBarBtn.style.display = 'none';
  hideSideBarBtn.style.display = 'inline-block';
};

var hideSideBar = function hideSideBar() {
  sidebar.style.left = '-100%';
  showSideBarBtn.style.display = 'inline-block';
  hideSideBarBtn.style.display = 'none';
};

showSideBarBtn.addEventListener('click', showSideBar);
hideSideBarBtn.addEventListener('click', hideSideBar); //codes to display and hide the side btn group items

document.addEventListener('DOMContentLoaded', function () {
  // Get all the open and close buttons
  var openBtns = document.querySelectorAll('.open_btn');
  var closeBtns = document.querySelectorAll('.close_btn'); // click event listeners to the open buttons

  openBtns.forEach(function (openBtn) {
    openBtn.addEventListener('click', function () {
      var groupItems = openBtn.closest('.aside_links-group').querySelector('.group_items');
      groupItems.style.display = 'block';
      openBtn.style.display = 'none';
      openBtn.nextElementSibling.style.display = 'inline-block';
    });
  }); // click event listeners to the close buttons

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var groupItems = closeBtn.closest('.aside_links-group').querySelector('.group_items');
      groupItems.style.display = 'none';
      closeBtn.style.display = 'none';
      closeBtn.previousElementSibling.style.display = 'inline-block';
    });
  });
}); //script for navigating with arrow keys

document.addEventListener('DOMContentLoaded', function (event) {
  var tbody = document.getElementById('tableBody');
  var rows = tbody.getElementsByTagName('tr');
  var selectedRow = null;

  function highlightRow(rowIndex) {
    if (selectedRow !== null) {
      rows[selectedRow].classList.remove('highlight');
    }

    selectedRow = rowIndex;
    rows[selectedRow].classList.add('highlight');
    rows[selectedRow].focus(); // Ensure the row is focused for keyboard events
  }

  var _loop = function _loop(i) {
    rows[i].tabIndex = 0; // Make rows focusable

    rows[i].addEventListener('click', function () {
      highlightRow(i);
    });
  };

  for (var i = 0; i < rows.length; i++) {
    _loop(i);
  }

  document.addEventListener('keydown', function (event) {
    if (selectedRow !== null) {
      if (event.key === 'ArrowUp') {
        if (selectedRow > 0) {
          highlightRow(selectedRow - 1);
        }
      } else if (event.key === 'ArrowDown') {
        if (selectedRow < rows.length - 1) {
          highlightRow(selectedRow + 1);
        }
      }
    }
  });
});
document.getElementById('leaveForm').addEventListener('input', function () {
  var leaveStarts = document.getElementById('leaveStarts').value;
  var duration = parseInt(document.getElementById('duration').value);

  if (leaveStarts && !isNaN(duration)) {
    var startDate = new Date(leaveStarts);
    var endDate = new Date(startDate.getTime() + duration * 24 * 60 * 60 * 1000);
    var formattedEndDate = endDate.toISOString().split('T')[0];
    document.getElementById('leaveEnds').value = formattedEndDate;
  }
});
document.getElementById('service_no').addEventListener('input', function () {
  var serviceNo = this.value.toUpperCase().replace(/\s+/g, '');
  var regex = /^(PO|PN|SO)(\d+)$/;

  if (regex.test(serviceNo)) {
    serviceNo = serviceNo.replace(regex, '$1.$2');
  } else if (/^(PO|PN|SO)[.\s]\d+$/.test(serviceNo)) {
    serviceNo = serviceNo.replace(/[.\s]/, '.');
  }

  this.value = serviceNo;
});
document.getElementById('orig_no').addEventListener('input', function () {
  var origNo = this.value.toUpperCase().replace(/\s+/g, '');
  var regex = /^(PO|PN|SO)(\d+)$/;

  if (regex.test(origNo)) {
    origNo = origNo.replace(regex, '$1.$2');
  } else if (/^(PO|PN|SO)[.\s]\d+$/.test(origNo)) {
    origNo = origNo.replace(/[.\s]/, '.');
  }

  this.value = origNo;
});
document.getElementById('name').addEventListener('blur', function () {
  var name = this.value.replace(/\s{2,}/g, ' ').trim();
  name = name.toLowerCase().replace(/\b\w/g, function (_char) {
    return _char.toUpperCase();
  });
  this.value = name;
});
document.getElementById('destination').addEventListener('blur', function () {
  var destination = this.value.replace(/\s{2,}/g, ' ').trim();
  destination = destination.toLowerCase().replace(/\b\w/g, function (_char2) {
    return _char2.toUpperCase();
  });
  this.value = destination;
});
document.getElementById('station').addEventListener('blur', function () {
  var station = this.value.replace(/\s{2,}/g, ' ').trim();
  station = station.toLowerCase().replace(/\b\w/g, function (_char3) {
    return _char3.toUpperCase();
  });
  this.value = station;
});
document.getElementById('subject_matter').addEventListener('blur', function () {
  var subject_matter = this.value.replace(/\s{2,}/g, ' ').trim();
  subject_matter = subject_matter.toLowerCase().replace(/\b\w/g, function (_char4) {
    return _char4.toUpperCase();
  });
  this.value = subject_matter;
});
document.getElementById('columns_group').addEventListener('click', function () {
  var actionBox = document.getElementById('columns_box');
  actionBox.classList.toggle('visible');
});
document.getElementById('sort_group').addEventListener('click', function () {
  var actionBox = document.getElementById('sort_box');
  actionBox.classList.toggle('visible');
});
document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('.action_box-selector input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      var _this = this;

      var columnClass = this.value;
      var columns = document.querySelectorAll("#main_table th#".concat(columnClass, ", #main_table td#").concat(columnClass));
      columns.forEach(function (column) {
        column.classList.toggle('hidden', !_this.checked);
      });
    });
  });
});