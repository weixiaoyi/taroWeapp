import Taro, { Component } from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import classNames from 'classnames';
import styles from './scroller.module.scss';

export default class Scroller extends Component {
  static externalClasses = ['my-class'];
  render() {
    return (
      <ScrollView
        className={classNames(styles.scroller, 'my-class')}
        scrollY
        scrollWithAnimation
        lowerThreshold='20'
        upperThreshold='20'
        onScrollToLower={e => console.log(e)}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}
