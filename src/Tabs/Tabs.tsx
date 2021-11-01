import * as React from "react";
import { useMemo } from "react";
import { Tabs as TabsBootstrap, Tab, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { OrderBy } from "../utilities/utilities";
import { ITabsState } from "./TabsState";

interface ITabsProps {
  tabs: ITabsState[];
  uniqueKey: string;
}

const TAB_SEARCH_KEY = "tab";

export const Tabs: React.FC<ITabsProps> = ({ tabs, uniqueKey }) => {
  const history = useHistory();
  const orderedTabs = useMemo(() => OrderBy<ITabsState>(tabs, "order"), [tabs]);

  const search = window.location.search;
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const uniqueSearchKey = useMemo(() => `${uniqueKey}-${TAB_SEARCH_KEY}`,[uniqueKey]);

  const urlKey = useMemo(() => {
    let searchKey = searchParams.get(uniqueSearchKey);
    return searchKey || orderedTabs[0].key;
  }, [searchParams, orderedTabs, uniqueSearchKey]);

  const updateKey = (key: string) => {
    searchParams.set(uniqueSearchKey, key);
    history.replace({ search: searchParams.toString() });
  };

  return (
    <TabsBootstrap
      id={uniqueKey}
      activeKey={urlKey}
      onSelect={(k) => updateKey(k!)}
      className="custom-tabs mb-0 p-0"
    >
      {orderedTabs?.map((singleTab) => {
        return (
          <Tab
            tabClassName="custom-tab-link"
            eventKey={singleTab.key}
            title={singleTab.name}
            key={singleTab.key}
          >
            <singleTab.component />
          </Tab>
        );
      })}
    </TabsBootstrap>
  );
};
