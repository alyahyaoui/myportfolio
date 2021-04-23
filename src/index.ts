//? getters and setters make you able to access properties and modify em from outside of the class
import Header from './modules/header';
import Drawer from './modules/drawer';
import Main from './modules/main';
import Footer from './modules/footer';

class App {
	static render() {
		const root = document.getElementById('app')! as HTMLDivElement;

		root.append(
			new Header().render(),
			new Drawer(['todo', 'habit', 'exprense']).render(),
			new Main().render(),
			new Footer().render(),
		);
	}
}
App.render();
