import Dispatcher from '../../core/Dispatcher';
import BaseStore from '../../common/stores/BaseStore';
import <%= moduleName %>Constants from '../constants/<%= moduleName %>Constants';

class <%= moduleName %>Store extends BaseStore {
	constructor() {
    super();
	}
}

export default new <%= moduleName %>Store();
