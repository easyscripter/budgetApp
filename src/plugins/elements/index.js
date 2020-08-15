import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
  Form,
  FormItem,
  Button,
  Card,
  Select,
  Option,
  Input,
  Alert
} from 'element-ui';

const elements = [
  Form,
  FormItem,
  Button,
  Card,
  Select,
  Option,
  Input,
  Alert
];

locale.use(lang);

elements.forEach(element => {
  Vue.use(element, { locale });
});

