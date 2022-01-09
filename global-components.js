import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'

Vue.component(FeatherIcon.name, FeatherIcon)

import {
	TreeViewInstaller
} from '@progress/kendo-treeview-vue-wrapper';

Vue.use(TreeViewInstaller)