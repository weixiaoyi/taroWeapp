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
      type: 'updateArticles',
      payload: { action: 'get', page: 1 }
    });
  };

  render() {
    const {
      model: { userArticles }
    } = this.props;
    return (
      <View className={styles.home}>
        {userArticles.map((item, index) => {
          return <Text key={index}>{item.title}</Text>;
        })}
      </View>
    );
  }
}

export default Home;
