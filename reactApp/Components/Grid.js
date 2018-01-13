import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import MenuItem from 'material-ui/MenuItem';
// import {
//   DropDownMenuOpenImmediateExample
// } from './DropDown.js';
import DropDownMenu from 'material-ui/DropDownMenu';

import React from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import SearchBar from 'material-ui-search-bar'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [{
    img: 'https://imgur.com/ovNlwDV.jpg',
    title: 'Jay1',
    author: 'jill111',
    level: 1,
    time: 1,
  },
  {
    img: 'https://imgur.com/KnqSIuu.jpg',
    title: 'Jay2',
    author: 'pashminu',
    level: 2,
    time: 2,
  },
  {
    img: 'https://imgur.com/Z3l7Uvj.jpg',
    title: 'Jay3',
    author: 'Danson67',
    level: 3,
    time: 3,
  },
  {
    img: 'https://imgur.com/BtMWTln.jpg',
    title: 'Jay4',
    author: 'fancycrave1',
    level: 4,
    time: 4,
  },
  {
    img: 'https://imgur.com/L0YxxKO.jpg',
    title: 'Jay5',
    author: 'Hans',
    level: 5,
    time: 5,
  },
  {
    img: 'https://imgur.com/H3Ueac8.jpg',
    title: 'Jay6',
    author: 'fancycravel',
    level: 6,
    time: 6,
  },
  {
    img: 'https://imgur.com/BDFh88h.jpg',
    title: 'Jay7',
    author: 'jill111',
    level: 7,
    time: 7,
  },
  {
    img: 'https://imgur.com/DF9Qlrh.jpg',
    title: 'Jay8',
    author: 'BkrmadtyaKarki',
    level: 8,
    time: 8,
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
export default class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      data: tilesData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    let newList = [];
    if (value === 1) {
      this.state.data.sort((a, b) => {
        return a.time - b.time;
      })
      newList = this.state.data;
    }
    if (value === 2) {
      this.state.data.sort((a, b) => {
        return a.level - b.level;
      })
      newList = this.state.data;
    }
    if (value === 3) {
      this.state.data.sort((a, b) => {
        return b.level - a.level;
      })
      newList = this.state.data;
    }
    console.log(newList);
    this.setState({
      value: value,
      data: newList
    });
  }
  render() {
    return (
      <div style={styles.root}>
        <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
            <MenuItem value={1} primaryText="Newest" />
            <MenuItem value={2} primaryText="Easiest" />
            <MenuItem value={3} primaryText="Hardiest" />
          </DropDownMenu>
          <GridList
            cellHeight={240}
            style={styles.gridList}
          >
            <Subheader>Jay's music</Subheader>
            {this.state.data.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={
                  <div>
                  <span>by <b>{tile.author}</b></span>
                  <div>Level: <b>{tile.level}</b></div>
                  </div>}
                // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>

      </div>
    )
  }
}
// const GridListExampleSimple = () => (
//   <div style={styles.root}>
//     <GridList
//       cellHeight={180}
//       style={styles.gridList}
//     >
//       <Subheader>Jay's music</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );
module.exports = {
  GridListExampleSimple
};
