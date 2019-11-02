import React, { useEffect, useContext, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';
import uuid from 'uuid/v4';

import StopItem from './StopItem';
import LineContext from '../../context/line/lineContext';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Stops = ({ match, location }) => {
  let history = useHistory();
  const {
    getPath,
    path,
    loading,
    error,
    source,
    destination,
    setSource,
    setDestination,
  } = useContext(LineContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (source && destination) {
      getPath(source, destination);
      history.replace(
        '/directions?from=' +
          encodeURIComponent(source) +
          '&to=' +
          encodeURIComponent(destination)
      );
    } else {
      const values = queryString.parse(location.search);
      setSource(values.from);
      setDestination(values.to);
    }
  }, [source, destination]);

  useEffect(() => {
    const i = Object.keys(path).reduce((a, index) => a + path[index].length, 0);
    setCount(i);
  }, [path]);

  if (loading) {
    return (
      <ul className='container mx-auto'>
        <StopItem
          stop='جاري البحث عن أقصر طريق ممكن...'
          color='blue'
          intensity='600'
          font='white'
          hover={false}
          icon='loading'
        />
        <li className='bg-gray-100 rounded my-2 p-20 text-center flex justify-center'>
          <Loader type='Triangle' color='#00BFFF' height={100} width={100} />
        </li>
      </ul>
    );
  }

  if (Object.keys(path).length === 0) {
    return (
      <ul className='container mx-auto'>
        <StopItem
          stop='تعذر إيجاد طريق مناسب لك'
          color='red'
          intensity='600'
          font='white'
          hover={false}
          icon='warning'
        />
      </ul>
    );
  }

  const getStationNoun = count => {
    switch (true) {
      case count === 1:
        return 'محطة واحدة';

      case count === 2:
        return 'محطتان';

      case count < 10:
        return 'محطات';

      default:
        return 'محطة';
    }
  };

  const ticket = count => {
    switch (true) {
      case count < 9:
        return 3;
      case count < 17:
        return 5;
      default:
        return 7;
    }
  };

  const createMessage = () => {
    if (count > 0) {
      const noun = getStationNoun(count);

      const message = [];
      message.push('ستمر ب');
      if (count > 2) {
        message.push('ـ');
        message.push(count);
        message.push(' ');
      }
      message.push(noun);
      message.push(' ');
      message.push('لذا عليك شراء تذكرة فئة الـ');
      message.push(ticket(count));
      message.push(' ');
      message.push('جنيهات');
      return message.join('');
    }
  };

  return (
    <div>
      <ul className='container mx-auto'>
        <StopItem
          stop={createMessage()}
          color={count < 10 ? 'yellow' : count < 17 ? 'green' : 'red'}
          intensity={count < 10 ? '400' : '600'}
          font={count < 10 ? 'black' : 'white'}
          hover={false}
        />

        {Object.keys(path).map((line, i) => {
          return (
            <Fragment key={uuid()}>
              <StopItem
                stop={line}
                color='blue'
                intensity='600'
                font='white'
                hover={false}
              />
              {path[line].map(stop => (
                <StopItem
                  key={uuid()}
                  stop={stop.name.arabic}
                  color='gray'
                  intensity='200'
                  front='black'
                  hover={true}
                />
              ))}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Stops;
