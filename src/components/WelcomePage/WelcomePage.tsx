import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellIcon } from './CellIcon';
import { ChatIcon } from './ChatIcon';
import { ChatIcon2 } from './ChatIcon2';
import { Ellipse12Icon } from './Ellipse12Icon';
import { HomeIcon } from './HomeIcon';
import { HomeIcon2 } from './HomeIcon2';
import { ProfileIcon } from './ProfileIcon';
import { ProfileIcon2 } from './ProfileIcon2';
import { SearchIcon } from './SearchIcon';
import { SearchIcon2 } from './SearchIcon2';
import { UploadIcon } from './UploadIcon';
import { UploadIcon2 } from './UploadIcon2';
import classes from './WelcomePage.module.css';
import { WifiIcon } from './WifiIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:10 */
export const WelcomePage: FC<Props> = memo(function WelcomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.welcomeEugene}>Welcome Eugene !</div>
      <div className={classes.letSGetYouOnYourWayToAJob}>Let’s get you on your way to a job</div>
      <div className={classes.button}>
        <div className={classes.rectangle2}></div>
        <div className={classes.personalizeYourRoadmap}>Personalize your Roadmap</div>
      </div>
      <div className={classes.button2}>
        <div className={classes.rectangle22}></div>
        <div className={classes.checkYourRoadmap}>Check Your Roadmap</div>
      </div>
      <div className={classes.statusBar}>
        <div className={classes.uI}>
          <div className={classes.battery}>
            <BatteryIcon className={classes.icon} />
          </div>
          <div className={classes.wifi}>
            <WifiIcon className={classes.icon2} />
          </div>
          <div className={classes.cell}>
            <CellIcon className={classes.icon3} />
          </div>
        </div>
        <div className={classes.time}>
          <div className={classes.time2}>9:27</div>
        </div>
      </div>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon4} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon5} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon6} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon7} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon8} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.tabBar2}>
        <div className={classes.background3}>
          <div className={classes.background4}></div>
          <div className={classes.home2}>
            <HomeIcon2 className={classes.icon9} />
          </div>
          <div className={classes.search2}>
            <SearchIcon2 className={classes.icon10} />
          </div>
          <div className={classes.upload2}>
            <UploadIcon2 className={classes.icon11} />
          </div>
          <div className={classes.chat2}>
            <ChatIcon2 className={classes.icon12} />
          </div>
          <div className={classes.profile2}>
            <ProfileIcon2 className={classes.icon13} />
          </div>
        </div>
        <div className={classes.shape2}></div>
      </div>
      <div className={classes.frame2}></div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon14} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.image3}></div>
    </div>
  );
});
