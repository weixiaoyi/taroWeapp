import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { MixinA } from '../../components';
import styles from './home.module.scss';
import { Inject } from '../../utils';

@Inject(({ globalStore, homeStore: model }) => ({ globalStore, model }))
class Home extends MixinA {
  config = {
    navigationBarTitleText: '首页'
  };

  startInit = () => {
    const {
      model: { dispatch }
    } = this.props;
    dispatch({
      type: 'getUserArticles'
    });
  };

  render() {
    const {
      model: { userArticles, dispatch }
    } = this.props;
    return (
      <View className={styles.home}>
        {userArticles.map((item, index) => {
          return (
            <View key={index} className={styles.article}>
              <View className={styles.title}>{item.title}</View>
              <View>{item.content}</View>
            </View>
          );
        })}
        <Button
          className={styles.addarticle}
          onClick={() => {
            dispatch({
              type: 'addUserArticle',
              payload: { title: '文章' + Date.now(), content: 'hahahah' }
            });
          }}
        >
          新增文章
        </Button>
      </View>
    );
  }
}

export default Home;
