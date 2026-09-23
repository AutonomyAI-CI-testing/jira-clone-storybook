/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained — no props, no state, no data. Icons are the frame's own exported
 * glyphs, inlined as data URIs so this stays a single file.
 */

const GEAR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAqBJREFUeAGNk11IU2EYx9/37GzznOPZpuahD7yYIkrpSmmpFxKrtpsojCyMSG/Eiygh6CbwJsLoRgvyoqvqwgqnk6A0omSyjaPmUdRtOvyYKNl0bbivc3bOMXfahBNj3fhcvfD7vc/753l5IMgpSZIQt3exn+PZekkBI7gS82gIolOv10eyPST3omuSvsfxnGZmatrQUGOsBagUD4YCV3M9aLVaFWWV5S3RCEsVF1H7ijxF57Lff63JbHZnBGZhoTpPjQ4DDHZzsXgF+5v1mkymfuj3+26wSfF1UuTvqyBRpcJw18kK/cfs7jRDv8BwtahWoutICnuYjLGtYNYzz4yNjZ0Dh6zp2enry6u+cVTghUqnk/mZDTONtIVEm8gnVQoEeVpXd35dZgInTLCo4i2C4/hKo/ls1b/h/LCfIQu1/dFIbCmfwEKaAupreg56mVPHqVP5hMaHsPHYKxIjn9E0jWWAOo+8sxsNPr9osvQZDPWPomx8iDp25EqGPejtTTuwK85ynQhKkpEUhHBwcPCg4248AnRFRyX5hb19IZaSRG3mXKxS4eFEtHhnawsA39rqMuN2W2Txu9NZuhLYcMwszN10Tbja/ZsbjqGhd6UyH/022uFe8swhMTaRstpsHhlcamz0R4LBuwgU2jCMMCeSfEdz822/zAOh6Od01DLgmqFXaNpx6O8Ynxw3e1YXbdC9uHYZAPFNOLztlYQ/QKvV9dUajbZsmZ50PJaAsgGRwBcMx7uiicQtmAF2u72pSEfqWD6lEUSuZzuwWdPS0noQn2GYaqgGw+Hgr26cLKjY3trxDrwf+ABzo4yMfOrJL9Sc8Mx62slyUiohSgb2hL0pywXLk2zvv+0IBkMvlQolftpomKdQKqxCVZB20N253l+xgirgpeNe6gAAAABJRU5ErkJggg==";

const CHEVRON_SMALL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAKZJREFUeAFNi70KglAAhVUsKESSqKaES41Cm0tD0NbQFL1DYy8QPYJP0NiStLYE0lBRiZB1EyFcKh3CSbji3yB3uOA3HA7f4VBUgc1u758f9qroGFJ021NaYrdSrnLTo/VWiGdxGC9nyZboyfXylEGnwbUBUA8GTP6OtaC1m7mtCc1RFqcDWRJ1fDhBc8jzdfX3dddMgELB9T4zMmL6Uk+DdzhHERrnxEc4dhZsfYkAAAAASUVORK5CYII=";

const CHEVRON_SECTION =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAStJREFUeAFdjz9Lw1AUxd/rS96LhVYKoojfonNdlG4VkULBZhLBUbA4OtQO/QIuiiAOBiSKYIuFTlFxUaJfw8WaakuN7981FSwxZzrcc3+XezBK6KzTyVoIe9RK+0DJ7mqhMIjnRhLIsMyOlN95zkWeKP4ajerxHP8Z13UJm1vYC0dhXUuOLMYQKIlMA++vFIsTKDUx0zOb4UjUFZdIC3mpCbqQ0TmucO262936B7RuH9c1mIdaafQxfGtW10qV8vJS5SscNiWIjELkqHX3UP0F2t6TzYU6AA3YIMgRvV4DYwzj0KdWg6WZAwQjEOqk7Xk2Pr+5f4+eyGXT5unACGr2YimIl3QcJ0dn54+11mUTUkGq3/+8ooy+gAnbyeWxbNsO6BTdAAzPAnH/B+OehAxuvlrcAAAAAElFTkSuQmCC";

const INFO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhtJREFUeAGNk8Fv0lAcx18fhZJNoEajqIkUvTTZAUg07mAihhPxUo+7uJJd8GT3F7j/YHiSxBjwRLKYAEtIdEAKSGTOTCiLDYKTNjvI5NAaBKqsVJwhqVjNvqeX7+/z/b73kvcQoNNGcsNLXiUZZaQsW6yIqIExACh0ICoClMHRs8Vri4yeh9MFz/MPSNKXUlVVbjVaPu/CdcK3cINIJzLutti+O39qHuy956qJZMKvLwB1vk7V9jgpn8+7wH+Uy+WoKrcrTTb6zbFshdjlqlI0GvXowfSLdOTV24p/tiBfZmm+wReOj332vCNmQS2PwuEwp4dMGCYMh9+Y2XDg5u34QFHwbDbrR96829H4D/vu0NKSAE6ocrlMoyhCwdO4XTAKPnn6eC2TSa8Zhbvdbs2MYh6oacbtEJgEm8OxbDQjSFKexHA40sbGYagW+oOe4axZr3vn5qwcHI+Ovk7u4P2LsFrB2LgXOC9f9OwfiAD25V7KecFJzwKyLAO7DSfYCkvo/VgyhpswU+jLYScOt7d3Ir3vA2p299X7q0Kz8TFUfFmU9b7rjCuiDPq1lXsr8WPj+eYm1fzUlNjJAwD/0HpsnSiV2FTpdbHNMAz+y0Omw63ylvfKJXfEhFgl5ccwfSC0ambbnDz5Ebjdfo6CmIXWxmpB6n5+GAjcEf8IT1WtV2kUAbTZjILDTueWHXdwmMVcE8VOPBgMFvTsT4u96VXN9nyMAAAAAElFTkSuQmCC";

const Glyph = ({ src, width, height }: GlyphProps): JSX.Element => (
  <img
    src={src}
    width={width}
    height={height}
    alt=""
    className="shrink-0 select-none"
  />
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-[Inter,sans-serif] text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span>UI magician Agent</span>
        <Glyph src={GEAR} width={14} height={16} />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <Glyph src={CHEVRON_SMALL} width={8} height={5} />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <Glyph src={CHEVRON_SECTION} width={12} height={8} />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <Glyph src={INFO} width={15} height={15} />
      </div>
      <div className="mt-[12px] flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <Glyph src={INFO} width={15} height={15} />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* Actions */}
      <div className="ml-[24px] mt-[23px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Trailing heading */}
      <h2 className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

interface GlyphProps {
  src: string;
  width: number;
  height: number;
}
