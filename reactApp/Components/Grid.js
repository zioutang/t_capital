import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import React from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },
  gridList: {
    // width: 900,
    // height: 1200,
    // display: 'flex',
    // overflowY: 'auto',
  },
};

const tilesData = [{
    img: 'https://imgur.com/ovNlwDV.jpg',
    title: 'Jay1',
    author: 'jill111',
    level: 3,
    time: 1,
  },
  {
    img: 'https://imgur.com/KnqSIuu.jpg',
    title: 'Jay2',
    author: 'pashminu',
    level: 3,
    time: 2,
  },
  {
    img: 'https://imgur.com/Z3l7Uvj.jpg',
    title: 'Jay3',
    author: 'Danson67',
    level: 2,
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
    level: 2,
    time: 5,
  },
  {
    img: 'https://imgur.com/H3Ueac8.jpg',
    title: 'Jay6',
    author: 'fancycravel',
    level: 1,
    time: 6,
  },
  {
    img: 'https://imgur.com/BDFh88h.jpg',
    title: 'Jay7',
    author: 'jill111',
    level: 4,
    time: 7,
  },
  {
    img: 'https://imgur.com/DF9Qlrh.jpg',
    title: 'Jay8',
    author: 'BkrmadtyaKarki',
    level: 3,
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
      data: tilesData,
      open: false,
      label: 'Newest'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  handleChange(value, event) {
    let newList = [];
    let label = '';
    if (value === 1) {
      this.state.data.sort((a, b) => {
        return a.time - b.time;
      })
      newList = this.state.data;
      label = 'Newest';
    }
    if (value === 2) {
      this.state.data.sort((a, b) => {
        return a.level - b.level;
      })
      newList = this.state.data;
      label = 'Easiest';
    }
    if (value === 3) {
      this.state.data.sort((a, b) => {
        return b.level - a.level;
      })
      newList = this.state.data;
      label = 'Hardiest';
    }
    this.setState({
      value: value,
      data: newList,
      open: false,
      label: label
    });
  }
  handleSearch(e) {
    e.preventDefault();
    let filter = tilesData.filter(item => {
      return item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      data: filter
    });
  }
  render() {
    return (
      <div style={styles.root}>
        <div>
          <Drawer
            openSecondary={true}
            docked={false}
            width={'100%'}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            disableSwipeToOpen={true}
          >
            <FlatButton
              label="Back"
              onClick={this.handleToggle}
            />
            <MenuItem onClick={this.handleChange.bind(this, 1)}>Newest</MenuItem>
            <MenuItem onClick={this.handleChange.bind(this, 2)}>Easiest</MenuItem>
            <MenuItem onClick={this.handleChange.bind(this, 3)}>Hardiest</MenuItem>
          </Drawer>
          <div >
            <TextField
              floatingLabelText="Search"
              onChange={this.handleSearch.bind(this)}
            />
            <span>   Sort by
            <FlatButton
              label={this.state.label}
              onClick={this.handleToggle}
            />
            </span>
          </div>
          <GridList
            cellHeight={400}
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
                  </div>}>
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>

      </div>
    )
  }
}
module.exports = {
  GridListExampleSimple
};
