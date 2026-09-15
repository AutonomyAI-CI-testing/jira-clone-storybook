const gearIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAqBJREFUeAGNk11IU2EYx9/37GzznOPZpuahD7yYIkrpSmmpFxKrtpsojCyMSG/Eiygh6CbwJsLoRgvyoqvqwgqnk6A0omSyjaPmUdRtOvyYKNl0bbivc3bOMXfahBNj3fhcvfD7vc/753l5IMgpSZIQt3exn+PZekkBI7gS82gIolOv10eyPST3omuSvsfxnGZmatrQUGOsBagUD4YCV3M9aLVaFWWV5S3RCEsVF1H7ijxF57Lff63JbHZnBGZhoTpPjQ4DDHZzsXgF+5v1mkymfuj3+26wSfF1UuTvqyBRpcJw18kK/cfs7jRDv8BwtahWoutICnuYjLGtYNYzz4yNjZ0Dh6zp2enry6u+cVTghUqnk/mZDTONtIVEm8gnVQoEeVpXd35dZgInTLCo4i2C4/hKo/ls1b/h/LCfIQu1/dFIbCmfwEKaAupreg56mVPHqVP5hMaHsPHYKxIjn9E0jWWAOo+8sxsNPr9osvQZDPWPomx8iDp25EqGPejtTTuwK85ynQhKkpEUhHBwcPCg4248AnRFRyX5hb19IZaSRG3mXKxS4eFEtHhnawsA39rqMuN2W2Txu9NZuhLYcMwszN10Tbja/ZsbjqGhd6UyH/022uFe8swhMTaRstpsHhlcamz0R4LBuwgU2jCMMCeSfEdz822/zAOh6Od01DLgmqFXaNpx6O8Ynxw3e1YXbdC9uHYZAPFNOLztlYQ/QKvV9dUajbZsmZ50PJaAsgGRwBcMx7uiicQtmAF2u72pSEfqWD6lEUSuZzuwWdPS0noQn2GYaqgGw+Hgr26cLKjY3trxDrwf+ABzo4yMfOrJL9Sc8Mx62slyUiohSgb2hL0pywXLk2zvv+0IBkMvlQolftpomKdQKqxCVZB20N253l+xgirgpeNe6gAAAABJRU5ErkJggg==";

const chevronSmallIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAKZJREFUeAFNi70KglAAhVUsKESSqKaES41Cm0tD0NbQFL1DYy8QPYJP0NiStLYE0lBRiZB1EyFcKh3CSbji3yB3uOA3HA7f4VBUgc1u758f9qroGFJ021NaYrdSrnLTo/VWiGdxGC9nyZboyfXylEGnwbUBUA8GTP6OtaC1m7mtCc1RFqcDWRJ1fDhBc8jzdfX3dddMgELB9T4zMmL6Uk+DdzhHERrnxEc4dhZsfYkAAAAASUVORK5CYII=";

const chevronMediumIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAStJREFUeAFdjz9Lw1AUxd/rS96LhVYKoojfonNdlG4VkULBZhLBUbA4OtQO/QIuiiAOBiSKYIuFTlFxUaJfw8WaakuN7981FSwxZzrcc3+XezBK6KzTyVoIe9RK+0DJ7mqhMIjnRhLIsMyOlN95zkWeKP4ajerxHP8Z13UJm1vYC0dhXUuOLMYQKIlMA++vFIsTKDUx0zOb4UjUFZdIC3mpCbqQ0TmucO262936B7RuH9c1mIdaafQxfGtW10qV8vJS5SscNiWIjELkqHX3UP0F2t6TzYU6AA3YIMgRvV4DYwzj0KdWg6WZAwQjEOqk7Xk2Pr+5f4+eyGXT5unACGr2YimIl3QcJ0dn54+11mUTUkGq3/+8ooy+gAnbyeWxbNsO6BTdAAzPAnH/B+OehAxuvlrcAAAAAElFTkSuQmCC";

const infoIconPrimary =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhtJREFUeAGNk8Fv0lAcx18fhZJNoEajqIkUvTTZAUg07mAihhPxUo+7uJJd8GT3F7j/YHiSxBjwRLKYAEtIdEAKSGTOTCiLDYKTNjvI5NAaBKqsVJwhqVjNvqeX7+/z/b73kvcQoNNGcsNLXiUZZaQsW6yIqIExACh0ICoClMHRs8Vri4yeh9MFz/MPSNKXUlVVbjVaPu/CdcK3cINIJzLutti+O39qHuy956qJZMKvLwB1vk7V9jgpn8+7wH+Uy+WoKrcrTTb6zbFshdjlqlI0GvXowfSLdOTV24p/tiBfZmm+wReOj332vCNmQS2PwuEwp4dMGCYMh9+Y2XDg5u34QFHwbDbrR96829H4D/vu0NKSAE6ocrlMoyhCwdO4XTAKPnn6eC2TSa8Zhbvdbs2MYh6oacbtEJgEm8OxbDQjSFKexHA40sbGYagW+oOe4axZr3vn5qwcHI+Ovk7u4P2LsFrB2LgXOC9f9OwfiAD25V7KecFJzwKyLAO7DSfYCkvo/VgyhpswU+jLYScOt7d3Ir3vA2p299X7q0Kz8TFUfFmU9b7rjCuiDPq1lXsr8WPj+eYm1fzUlNjJAwD/0HpsnSiV2FTpdbHNMAz+y0Omw63ylvfKJXfEhFgl5ccwfSC0ambbnDz5Ebjdfo6CmIXWxmpB6n5+GAjcEf8IT1WtV2kUAbTZjILDTueWHXdwmMVcE8VOPBgMFvTsT4u96VXN9nyMAAAAAElFTkSuQmCC";

const infoIconSecondary =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAklJREFUeAF1kl9oUmEYxj/P0XOmZR5tbVOY5iAarjFqrQwJ6sYuIi+mscEoAm/mhZTdduN90MVuiv6CMh2CSEMmB9sxzHBnGZKpuLbhNiQhaW65dvx3PJ0E4ezgnquP5/097/d+L58AcORecI9dHNffhwVNq0Qs3kN7EFCtUhjdZMo1qh7QDesec3moc/iezd67dtXw/uQJaTW//XNcrdJo+xVKrUY1pNjY2bGIJCiaWksngsHgBW4DkMrlZrYKhXQoRJwHx4hhGEGEjMymspkGEYuNtE2v1zuYzGS2/X6/kgvjEXxqCV+y8JsQ8ag9u7kWbo89Ojb6lKnRLrPZXORCChl2UzmgvMEPR3HiOU1RZ3Act0BCCJos5NcX+dCrF2/sqyurDr7vdDqbpfL+SxhFpoQoipRMZvMXPmS6fctIA0GdPYb5tWSSPOzrVZqgBtOqgy7qVamlGu25J91qlcohgCAIYceGgc/nQ/hAPJFYKe3+VnYLSyVSgCBIHfpzQPX1q9UaPuCw2bbkp08Vu4UNhuuSQbX6A3s57FbIZQ+6QUgPigUCEYzrsQsTyhXYJMwwbugjEZ5rtegZIkaM8MOl4q9PADvqGY3G2Vq11pqY0C+0jc8kac9s/ijP++avgGPE7gVejkZtZIJsuF672l9U0Cl+TX+7IxYhczAMefIb+XfZQmHXYbWWPR4PNqy/fElMM4+oWkO3nss8nL47HTwS/q9QPHJ2QCJ9KxAiQ6IeiUwIi/abdB1UDv6CBt18trwYdLFn3uvw/wDo/edYwKna/gAAAABJRU5ErkJggg==";

/**
 * TestCard — a static, self-contained recreation of a Figma reference panel
 * ("UI magician Agent"). Built purely as a design-to-code smoke test:
 * no props, no external data, approximate visual fidelity only.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-sm bg-[#000000] px-5 py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <img src={gearIcon} alt="" className="h-4 w-3.5" />
      </div>

      {/* Collapsible row */}
      <div className="mt-9 flex items-center gap-2">
        <img src={chevronSmallIcon} alt="" className="h-[5px] w-2" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-16 flex items-center gap-2">
        <img src={chevronMediumIcon} alt="" className="h-2 w-3" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <img src={infoIconSecondary} alt="" className="h-[15px] w-[15px]" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus-visible:outline-none"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <img src={infoIconPrimary} alt="" className="h-[15px] w-[15px]" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-none"
      />

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-14">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
