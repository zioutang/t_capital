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
import Lightbox from 'react-images';
const styles = {
  center: {
    'textAlign': 'center'
  },
  bar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  }
};

const tilesData = [{
    src: 'https://imgur.com/ovNlwDV.jpg',
    title: 'Jay1',
    author: 'jill111',
    level: 3,
    time: 1,
  },
  {
    src: 'https://imgur.com/KnqSIuu.jpg',
    title: 'Jay2',
    author: 'pashminu',
    level: 3,
    time: 2,
  },
  {
    src: 'https://imgur.com/Z3l7Uvj.jpg',
    title: 'Jay3',
    author: 'Danson67',
    level: 2,
    time: 3,
  },
  {
    src: 'https://imgur.com/BtMWTln.jpg',
    title: 'Jay4',
    author: 'fancycrave1',
    level: 4,
    time: 4,
  },
  {
    src: 'https://imgur.com/L0YxxKO.jpg',
    title: 'Jay5',
    author: 'Hans',
    level: 2,
    time: 5,
  },
  {
    src: 'https://imgur.com/H3Ueac8.jpg',
    title: 'Jay6',
    author: 'fancycravel',
    level: 1,
    time: 6,
  },
  {
    src: 'https://imgur.com/BDFh88h.jpg',
    title: 'Jay7',
    author: 'jill111',
    level: 4,
    time: 7,
  },
  {
    src: 'https://imgur.com/DF9Qlrh.jpg',
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
      label: 'Newest',
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
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
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  openLightbox(index, event) {
    console.log(index);
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
          <Drawer
            openSecondary={true}
            docked={false}
            width={'100%'}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            disableSwipeToOpen={true}
          >
            <div>
            <FlatButton
              label="Back"
              onClick={this.handleToggle}
              icon={(<i className="material-icons">keyboard_arrow_left</i>)}
              primary={true}
            />
          </div>
            <MenuItem style={styles.center} onClick={this.handleChange.bind(this, 1)}>Newest</MenuItem>
            <MenuItem style={styles.center} onClick={this.handleChange.bind(this, 2)}>Easiest</MenuItem>
            <MenuItem style={styles.center} onClick={this.handleChange.bind(this, 3)}>Hardiest</MenuItem>
          </Drawer>
          <div style={styles.bar}>
            <TextField
              floatingLabelText="Search"
              onChange={this.handleSearch.bind(this)}
            />
            <div style={styles.bar}>
              <p>Sort by:</p>
              <FlatButton
                label={this.state.label}
                onClick={this.handleToggle}
                primary={true}
                style={styles.test1}
              />
            </div>
          </div>
          <GridList
            cellHeight={240}
          >
            <Subheader>Jay's music</Subheader>
            {this.state.data.map((tile, id) => (
              <GridTile
                key={id}
                title={`Song Name: ${tile.title}`}
                onClick={this.openLightbox.bind(this, id)}
                subtitle={
                  <div>
                    <div><b>by: {tile.author}</b></div>
                    <div><b>Difficulty: {tile.level}</b></div>
                  </div>
                  }>
                <img src={tile.src} />
              </GridTile>
            ))}
          </GridList>
          <Lightbox
            currentImage={this.state.currentImage}
            images={this.state.data}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeLightbox}
      />
        </div>
    )
  }
}
module.exports = {
  GridListExampleSimple
};
