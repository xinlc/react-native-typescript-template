import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Platform, Dimensions, StyleSheet } from 'react-native';
import {
  WhiteSpace,
  ListView,
  Flex,
  Toast,
  Portal,
} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import LoadingSpinner from '../../components/LoadingSpinner';
import CommonEmptyView from '../../components/CommonEmptyView';
import CommonTouchable from '../../components/CommonTouchable';
import { RootState } from '../../store/types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

let _loadKey: number | null = null;
let _abortFetch: (() => void) | null = null;

const Page = () => {
  let listViewRef: any = null;
  const dispatch = useDispatch();

  // const fetchList = useSelector((state: RootState) => state.list.fetchList);
  // const lastRefreshTime = useSelector((state: RootState) => state.list.listLastRefreshTime);

  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   // handleStatusChang
  //   if (fetchList.loading) {
  //     if (currentPage === 1) {
  //       _loadKey && Portal.remove(_loadKey);
  //       _loadKey = Toast.loading('加载中...', 0);
  //     }
  //   } else {
  //     _loadKey && Portal.remove(_loadKey);
  //   }
  //   if (fetchList.error) {
  //     Toast.fail(fetchList.message || '');
  //     if (_abortFetch) {
  //       _abortFetch();
  //     }
  //   }
  //   if (fetchList.data) {
  //     // onBack();
  //   }
  // }, [fetchList]);

  // useEffect(() => {
  //   if (listViewRef) {
  //     listViewRef.refresh();
  //   }
  // }, [lastRefreshTime]);

  const onFetch = async (page = 1, startFetch: any, abortFetch: any) => {
    _abortFetch = abortFetch;
    try {
      setCurrentPage(page);
      const pageLimit = 10;
      const skip = (page - 1) * pageLimit;
      let rowData = Array.from({ length: pageLimit }, (value, index) => {
        return {
          id: index,
          time: moment().format('YYYY-MM-DD hh:mm:ms'),
        };
      });
      if (page === 10) {
        rowData = [];
      }
      // await sleep(1000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch();
    }
  };

  const onPressItem = (item: any): void => {
    console.log(item);
  };

  const renderPaginationFetchingView = () => {
    if (currentPage === 1) {
      return null;
    }
    return <LoadingSpinner height={HEIGHT * 0.2} text="加载中..." />;
  };

  const renderItem = (item: any) => {
    return (
      <CommonTouchable
        style={styles.itemContainer}
        onPress={() => onPressItem(item)}
      >
        <Flex direction="column" align="start">
          <Flex>
            <Flex.Item>
              <Text style={{ color: '#131313' }}>{item.time}</Text>
            </Flex.Item>
          </Flex>
        </Flex>
      </CommonTouchable>
    );
  };

  return (
    <View style={styles.container}>
      <ListView
        ref={ref => { listViewRef = ref }}
        key="list"
        onFetch={onFetch}
        keyExtractor={(item, index) => `${index} - ${item}`}
        refreshableMode="advanced"
        renderItem={renderItem}
        numColumns={1}
        // ----Extra Config----
        // header={renderHeader}
        paginationFetchingView={renderPaginationFetchingView}
        // not supported on FlatList
        // sectionHeaderView={renderSectionHeaderView}
        // paginationFetchingView={this.renderPaginationFetchingView}
        // paginationAllLoadedView={this.renderPaginationAllLoadedView}
        // paginationWaitingView={this.renderPaginationWaitingView}
        emptyView={CommonEmptyView}
        // separator={renderSeparatorView}

        arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}
        refreshViewStyle={
          Platform.OS === 'ios' ? { height: 80, top: -80 } : { height: 80 }
        }
        refreshViewHeight={80}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f5',
  },
  label: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderBottomLeftRadius: 10,
  },
  itemContainer: {
    padding: 10,
    paddingRight: 0,
    margin: 10,
    marginBottom: 0,
    borderRadius: 2,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

Page.propTypes = {};
Page.defaultProps = {};

export default React.memo(Page);
