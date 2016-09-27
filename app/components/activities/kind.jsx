import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Tag from 'components/activities/tag.jsx';

export default class Kind extends React.Component {

  constructor(props) {
    super(props);
    this.tags = new Set();
  }

  onSelect = (selected, tag) => {
    if (selected) {
      this.tags.add(tag);
    } else {
      this.tags.delete(tag);
    }
  }

  onClick = () => {
    const tags = [...this.tags].join(' ');
    this.props.onCreate(this.props.kind, tags);
  }

  render() {
    const {id, description, color} = this.props.kind;

    const tagsStyle = {
      color: '#fff',
      display: 'flex',
      flexWrap: 'wrap',
      top: '60px',
      position: 'absolute',
    };

    const tags = [
      '#fikgrandeporra',
      '#birl',
      '#saidajaula',
      '#ficajumento',
      '#semcarbohidratos',
    ].map( tag => <Tag key={`tag-${id}-${tag}`} onSelect={this.onSelect.bind(this)} tag={tag} />);

    const actionIcon = (<IconButton
      iconClassName="fa fa-calendar-check-o"
      color="white"
      onClick={this.onClick.bind(this)}
    />);

    return (<GridTile
        key={`kind-${id}`}
        style={{
          backgroundColor: color,
        }}
        title={description}
        actionIcon={actionIcon}
    >
      <div style={tagsStyle}>{tags}</div>
    </GridTile>);
  }
}
