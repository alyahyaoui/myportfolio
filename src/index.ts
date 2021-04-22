class Header {
	render() {
		const header = document.createElement('header');
		const menuBtn = document.createElement('button');
		const logo = document.createElement('a');
		const search = document.createElement('input');

		header.classList.add('header');
		menuBtn.classList.add('menuBtn');
		logo.classList.add('logo');
		search.classList.add('search');
		header.append(menuBtn, logo, search);
		return header;
	}
}
class Drawer {
	render() {
		const drawer = document.createElement('div');
		const navMenu = document.createElement('ul');
		drawer.classList.add('drawer');
		navMenu.classList.add('navMenu');
		['todo', 'link2', 'link3'].forEach((link) => {
			navMenu.appendChild(new NavItem(link).render());
		});
		drawer.appendChild(navMenu);
		return drawer;
	}
}

class NavItem {
	content;
	constructor(content: string) {
		this.content = content;
	}
	render() {
		const navItem = document.createElement('li');
		const navLink = document.createElement('a');
		navItem.classList.add('navItem');
		navLink.classList.add('navLink');
		navLink.textContent = this.content;
		navItem.appendChild(navLink);
		return navItem;
	}
}

class Main {
	render() {
		const main = document.createElement('main');
		main.classList.add('main');
		return main;
	}
}

class Footer {
	render() {
		const footer = document.createElement('footer');
		footer.classList.add('footer');
		footer.innerHTML = '<h6>Powered by Ali Yahyaoui</h6>';
		return footer;
	}
}

class App {
	static render() {
		const root = document.getElementById('app')! as HTMLDivElement;

		root.append(
			new Header().render(),
			new Drawer().render(),
			new Main().render(),
			new Footer().render()
		);
	}
}
App.render();
