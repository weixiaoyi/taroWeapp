import Taro, { Component } from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import styles from './scroller.module.scss';
import classNames from 'classnames';

class Scroller extends Component {
  static externalClasses = ['my-class'];
  render() {
    const { style } = this.props;
    return (
      <ScrollView
        className={classNames(styles.scroller, 'my-class')}
        scrollY
        scrollWithAnimation
        style={style}
        lowerThreshold='20'
        upperThreshold='20'
        onScrollToLower={e => console.log(e)}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}

export default Scroller;
