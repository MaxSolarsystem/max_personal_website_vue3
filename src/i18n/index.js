// 创建 i18n 实例
import {createI18n} from 'vue-i18n';
import en from './en.json';
import zh from './zh.json';

const i18n = createI18n({
    locale: 'zh', // 默认语言
    messages: {
        en,
        zh
    }
});

export default i18n;