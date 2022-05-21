import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreatePodcast from "./components/CreatePodcast";
import Podcast from "./components/Podcast";
import Podcasts from "./components/Podcasts";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function MyRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/podcasts/create">Add Podcast</Link>
          </li>
        </ul>

        <hr />
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/podcasts" exact>
            <Podcasts />
          </Route>
          <Route path="/podcasts/create">
            <CreatePodcast />
          </Route>
          <Route path="/podcasts/:id">
            <Podcast />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}