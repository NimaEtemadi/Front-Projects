//!ham menu codes
const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close');
const body = document.querySelector('body');

const sidebarHandler = () => {
    sidebar.classList.toggle('active');
};
ham.onclick = (e) => {
    e.stopPropagation();
    sidebarHandler();
    console.log(ham);
};
closebtn.onclick = () => {
    sidebarHandler();
};

body.onscroll = () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
};

//!select section codes
const selectors = document.querySelectorAll('.work-select');
const work_items = document.querySelectorAll('.work-item');
selectors.forEach((selector) => {
    selector.onclick = () => {
        selectors.forEach((selector) => {
            selector.classList.remove('select');
        });

        selector.classList.add('select');
        if (selector.classList.contains('select')) {
            work_items.forEach((work_item) => {
                if (
                    work_item.getAttribute('data-work') ==
                    selector.getAttribute('data-select')
                ) {
                    work_item.classList.remove('unselected');
                    setTimeout(() => {
                        work_item.style.display = 'block';
                    }, 500);
                } else if (selector.getAttribute('data-select') == 'all') {
                    work_item.classList.remove('unselected');
                    setTimeout(() => {
                        work_item.style.display = 'block';
                    }, 500);
                } else {
                    work_item.classList.add('unselected');
                    setTimeout(() => {
                        work_item.style.display = 'none';
                    }, 500);
                }
            });
        }
    };
});

// ! iam
const iam = document.querySelector('.iam');
const skills = ['طراح وب', 'گرافیست', 'عکاس و فیلمبردار'];


const changeSkills = () => {
    let i = 0;
    setInterval(() => {
        if (i == skills.length) {
            i = 0;
        }
        iam.innerHTML = skills[i];
        i++;
    }, 2000);
}
changeSkills();