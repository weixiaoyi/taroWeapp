### 注意点
1.文件夹及文件名不要大写

2.this.props.children不能写成const {children}=this.props

3.taro框架的mobx要升级到5以上，就可以解决数组更新，页面不更新的问题

4.导入css不能用import * as styles 只能import styles from 
