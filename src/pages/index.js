import React from "react"

export default class Foo extends React.Component {

  componentDidMount () {
    import(/* webpackIgnore: true */ 'https://platform.amaging.net/v1/client/client.js');
  }
}
