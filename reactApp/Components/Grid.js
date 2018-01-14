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
    level: 3,
    time: '2018',
  },
  {
    src: 'https://imgur.com/KnqSIuu.jpg',
    title: 'Jay2',
    level: 3,
    time: '2017',
  },
  {
    src: 'https://imgur.com/Z3l7Uvj.jpg',
    title: 'Jay3',
    level: 2,
    time: '2016',
  },
  {
    src: 'https://imgur.com/BtMWTln.jpg',
    title: 'Jay4',
    level: 4,
    time: '2015',
  },
  {
    src: 'https://imgur.com/L0YxxKO.jpg',
    title: 'Jay5',
    level: 2,
    time: '2014',
  },
  {
    src: 'https://imgur.com/H3Ueac8.jpg',
    title: 'Jay6',
    level: 1,
    time: '2013',
  },
  {
    src: 'https://imgur.com/BDFh88h.jpg',
    title: 'Jay7',
    level: 4,
    time: '2012',
  },
  {
    src: 'https://imgur.com/DF9Qlrh.jpg',
    title: 'Jay8',
    level: 3,
    time: '2011',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      data: tilesData,
      DrawerOpen: false,
      label: 'Newest',
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  handleToggle() {
    this.setState({
      DrawerOpen: !this.state.DrawerOpen,
    });
  }
  handleSort(value, event) {
    let newList = [];
    let label = '';
    if (value === 1) {
      this.state.data.sort((a, b) => {
        return b.time.localeCompare(a.time);
      })
      newList = this.state.data;
      label = 'Newest';
    }
    if (value === 2) {
      this.state.data.sort((a, b) => {
        return a.time.localeCompare(b.time);
      })
      newList = this.state.data;
      label = 'Oldest';
    }
    if (value === 3) {
      this.state.data.sort((a, b) => {
        return a.level - b.level;
      })
      newList = this.state.data;
      label = 'Easiest';
    }
    if (value === 4) {
      this.state.data.sort((a, b) => {
        return b.level - a.level;
      })
      newList = this.state.data;
      label = 'Hardiest';
    }
    this.setState({
      value: value,
      data: newList,
      DrawerOpen: false,
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
            open={this.state.DrawerOpen}
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
            <MenuItem style={styles.center} onClick={this.handleSort.bind(this, 1)}>Newest</MenuItem>
            <MenuItem style={styles.center} onClick={this.handleSort.bind(this, 2)}>Oldest</MenuItem>
            <MenuItem style={styles.center} onClick={this.handleSort.bind(this, 3)}>Easiest</MenuItem>
            <MenuItem style={styles.center} onClick={this.handleSort.bind(this, 4)}>Hardiest</MenuItem>
          </Drawer>
          <div style={styles.bar}>
            <TextField
              floatingLabelText="Search"
              onChange={this.handleSearch.bind(this)}
            />
            <div style={styles.bar}>
              <p>Sort by :</p>
              <FlatButton
                label={this.state.label}
                onClick={this.handleToggle}
                primary={true}
                hoverColor='white'
                disableTouchRipple={true}
              />
            </div>
          </div>
          <GridList cellHeight={240}>
            <Subheader>Jay's music</Subheader>
            {this.state.data.map((tile, id) => (
              <GridTile
                key={id}
                title={`Song Name: ${tile.title}`}
                onClick={this.openLightbox.bind(this, id)}
                subtitle={
                  <div>
                    <div><b>Upload: {tile.time}</b></div>
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
  Grid
};
