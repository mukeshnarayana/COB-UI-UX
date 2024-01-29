import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { PhBagDuotoneIcon } from './PhBagDuotoneIcon';
import { Rectangle5Icon } from './Rectangle5Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image1}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.apple}>Apple</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.support}>Support</div>
      <div className={classes.tV}>TV</div>
      <div className={classes.watch}>Watch</div>
      <div className={classes.mac}>mac</div>
      <div className={classes.iPad}>I pad</div>
      <div className={classes.iPhone}>I phone</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.image3}></div>
      <div className={classes.airPodsMac}>Air pods mac</div>
      <div className={classes.appleCareForHeadphonesFrom812M}>
        <div className={classes.textBlock}>AppleCare for Headphones</div>
        <div className={classes.textBlock2}>From ₹812/mo.Per</div>
        <div className={classes.textBlock3}>MonthFootnote&quot; or 6900</div>
        <div className={classes.textBlock4}>Get up to two years of tech support and accidental damage protection</div>
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.addToBag}>Add to Bag</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.from7050MoPerMonthWithEMIFootn}>From ₹7050/mo.Per Month with EMI, Footnote&quot;</div>
      <div className={classes._59900Oo}>59900.oo</div>
      <div className={classes.phBagDuotone}>
        <PhBagDuotoneIcon className={classes.icon3} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon5} />
      </div>
      <div className={classes.mAX}>MAX</div>
    </div>
  );
});
