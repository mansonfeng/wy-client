import Mock from 'mockjs'
import data from './homepage.json'
import shiwuData from './shiwu.json'
import classifyData from './classify.json'

Mock.mock('/navCateList', {code:0, data:data.navCateList});
Mock.mock('/focusList', {code:0, data:data.focusList});
Mock.mock('/tagList', {code:0, data:data.tagList});
Mock.mock('/firstNew', {code:0, data:data.firstNew});
Mock.mock('/goodSelected', {code:0, data:data.goodSelected});
Mock.mock('/specialSelected', {code:0, data:data.specialSelected});
Mock.mock('/goodJuJia', {code:0, data:data.goodJuJia});

Mock.mock('/summerGirl', {code:0, data:shiwuData.summerGirl});
Mock.mock('/shiWuCarousel', {code:0, data:shiwuData.shiWuCarousel});
Mock.mock('/recommend', {code:0, data:shiwuData.recommend});
Mock.mock('/tenTimeCarousel', {code:0, data:shiwuData.tenTimeCarousel});
Mock.mock('/yanXuanZhenP', {code:0, data:shiwuData.yanXuanZhenP});
Mock.mock('/yanXuanLook', {code:0, data:shiwuData.yanXuanLook});
Mock.mock('/more', {code:0, data:shiwuData.more});

Mock.mock('/classify', {code:0, data:classifyData});

